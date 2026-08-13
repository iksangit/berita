"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import type { GitHubProfile, GitHubRepo } from "@/lib/github";

function extractUsername(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+)/);
  return match ? match[1] : null;
}

export function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const username = extractUsername(siteConfig.github);
  const [loading, setLoading] = useState(username !== null);
  const isConfigured = username !== null;

  useEffect(() => {
    if (!username) return;

    let cancelled = false;

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (!cancelled) {
          if (profileRes.ok) setProfile(await profileRes.json());
          if (reposRes.ok) setRepos(await reposRes.json());
        }
      } catch {
        // Silently fail - will show placeholder state
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [username]);

  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Dart: "#00b4ab",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Go: "#00ADD8",
    Rust: "#dea584",
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Code Is Where{" "}
              <span className="text-gradient">Ideas Become Real</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Check out my open-source work on GitHub.
            </p>
          </div>
        </ScrollReveal>

        {/* When not configured, show placeholder */}
        {!isConfigured && (
          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-lg rounded-xl border border-dashed border-border bg-card/50 p-8 text-center">
              <GithubIcon className="mx-auto h-12 w-12 text-muted-foreground/30" />
              <p className="mt-4 text-muted-foreground">
                GitHub integration will appear here once configured.
              </p>
              <p className="mt-2 text-xs text-muted-foreground/50">
                Update <code className="rounded bg-secondary px-1.5 py-0.5">REPLACE_WITH_GITHUB_URL</code> in{" "}
                <code className="rounded bg-secondary px-1.5 py-0.5">data/config.ts</code>
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Profile stats */}
        {profile && (
          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-lg items-center gap-6 rounded-xl border border-border bg-card p-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary">
                <GithubIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-lg font-semibold text-foreground">{profile.name || profile.login}</div>
                <div className="text-sm text-muted-foreground">@{profile.login}</div>
              </div>
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-lg font-bold text-foreground">{profile.public_repos}</div>
                  <div className="text-xs text-muted-foreground">Repos</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{profile.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Repos */}
        {isConfigured && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-40 animate-pulse rounded-xl border border-border bg-card"
                  />
                ))
              : repos.map((repo, i) => (
                  <ScrollReveal key={repo.id} delay={i * 0.05}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                          {repo.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {repo.description || "No description"}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: langColors[repo.language] || "#6e7681" }}
                            />
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
          </div>
        )}

        {/* CTA to full GitHub */}
        {isConfigured && (
          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => window.open(siteConfig.github, "_blank")}>
                <GithubIcon className="mr-2 h-4 w-4" />
                View All Repositories
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
