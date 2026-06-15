"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ADMIN_MODE_KEY = "github-sync-admin-mode";

export function GitHubSyncButton() {
  const [adminMode, setAdminMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" && window.localStorage.getItem(ADMIN_MODE_KEY) === "1";
    setAdminMode(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      if (modifier && e.shiftKey && e.key.toLowerCase() === "g") {
        e.preventDefault();
        setAdminMode(prev => {
          const next = !prev;
          window.localStorage.setItem(ADMIN_MODE_KEY, next ? "1" : "0");
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted || !adminMode) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full shadow-lg"
          aria-label="Open GitHub sync instructions"
        >
          <Github className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            Sync with GitHub
          </DialogTitle>
          <DialogDescription>
            Pull the latest changes from your connected GitHub repository using
            the Lovable editor.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground">
            <li>
              Click the <strong>+</strong> button in the chat composer.
            </li>
            <li>
              Select <strong>GitHub</strong> from the menu.
            </li>
            <li>
              Choose <strong>Sync</strong> to pull the latest changes.
            </li>
          </ol>
          <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
            This dialog is only visible in admin mode. Toggle it anytime with{" "}
            <kbd className="rounded border bg-background px-1 font-mono">
              Ctrl+Shift+G
            </kbd>{" "}
            or{" "}
            <kbd className="rounded border bg-background px-1 font-mono">
              Cmd+Shift+G
            </kbd>
            .
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
