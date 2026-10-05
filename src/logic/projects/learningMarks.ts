// Shared thumbnail marks for the YOLO26 learning loop (module singleton, not redux).
// ContinuousTraining syncs server-reviewed file names here; ImagesList reads them
// at render time. Green = approved ground truth, blue = boxes present (drafts/edits).
const reviewedFiles = new Set<string>();

export function syncReviewedFiles(names: Iterable<string>): string[] {
    const added: string[] = [];
    for (const name of names) {
        if (!reviewedFiles.has(name)) {
            reviewedFiles.add(name);
            added.push(name);
        }
    }
    return added;
}

export function markReviewedFile(name: string): void {
    reviewedFiles.add(name);
}

export function isReviewedFile(name: string): boolean {
    return reviewedFiles.has(name);
}

export function reviewedCount(): number {
    return reviewedFiles.size;
}
