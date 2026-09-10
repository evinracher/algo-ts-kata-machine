const dir = [
    [0, 1], // y + 1 Up
    [1, 0], // x + 1 Right
    [0, -1], // y - 1 Down
    [-1, 0], // x - 1 Left
];

/**
 * Recursive implementation of Maze solver
 * @param maze
 * @param wall
 * @param curr
 * @param end
 * @param seen
 * @param path A point is only added if we succeed. If we fail, we remove the point from the array
 * @returns true if it is a valid path (find the end)
 */

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base cases
    // 1. Off the maze
    // 2. In Wall
    // 3. End point
    // 4. Seen cell
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x == end.x && curr.y == end.y) {
        // Other implementation path.push(end)
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 Recurse
    // pre
    // recurse
    // post

    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    const up = { x: curr.x, y: curr.y + 1 };
    const right = { x: curr.x + 1, y: curr.y };
    const down = { x: curr.x, y: curr.y - 1 };
    const left = { x: curr.x - 1, y: curr.y };

    // Recurse
    // Other implementation:
    // for (const element of dir) {
    //     const [x, y] = element;
    //     if (
    //         walk(
    //             maze,
    //             wall,
    //             {
    //                 x: curr.x + x,
    //                 y: curr.y + y,
    //             },
    //             end,
    //             seen,
    //             path,
    //         )
    //     ) {
    //         return true;
    //     }
    // }

    if (walk(maze, wall, up, end, seen, path)) {
        path.push(up);
        return true;
    }

    if (walk(maze, wall, right, end, seen, path)) {
        path.push(right);
        return true;
    }

    if (walk(maze, wall, down, end, seen, path)) {
        path.push(down);
        return true;
    }

    if (walk(maze, wall, left, end, seen, path)) {
        path.push(left);
        return true;
    }

    // Post
    // No path led to the exit: we removed this cell
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = maze.map((row) =>
        new Array<boolean>(row.length).fill(false),
    );

    // In order
    walk(maze, wall, start, end, seen, path);
    return path;
}
