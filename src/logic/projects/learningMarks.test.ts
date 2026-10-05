import {isReviewedFile, syncReviewedFiles} from './learningMarks';

describe('learningMarks', () => {
    it('reports files as unreviewed until synced', () => {
        expect(isReviewedFile('never-seen-scan.png')).toBe(false);
    });
    it('syncs only newly seen files', () => {
        expect(syncReviewedFiles(['scan-a.png', 'scan-b.png'])).toEqual(['scan-a.png', 'scan-b.png']);
        expect(syncReviewedFiles(['scan-a.png', 'scan-c.png'])).toEqual(['scan-c.png']);
        expect(isReviewedFile('scan-a.png')).toBe(true);
        expect(isReviewedFile('scan-b.png')).toBe(true);
    });
});
