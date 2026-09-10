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
        curr.x >= maze.length ||
        curr.y < 0 ||
        curr.y >= maze[0].length
    ) {
        return false;
    }

    if (maze[curr.x][curr.y] === wall) {
        return false;
    }

    if (curr == end) {
        return true;
    }

    if (seen[curr.x][curr.y]) {
        return false;
    }

    seen[curr.x][curr.y] = true;

    const up = { x: curr.x, y: curr.y + 1 };
    const right = { x: curr.x + 1, y: curr.y };
    const down = { x: curr.x, y: curr.y - 1 };
    const left = { x: curr.x - 1, y: curr.y + 1 };

    const resultUp = walk(maze, wall, up, end, seen, path);
    const resultRight = walk(maze, wall, right, end, seen, path);
    const resultDown = walk(maze, wall, down, end, seen, path);
    const resultLeft = walk(maze, wall, left, end, seen, path);

    if (resultUp) {
        path.push(up);
        return true;
    }

    if (resultRight) {
        path.push(right);
        return true;
    }

    if (resultDown) {
        path.push(down);
        return true;
    }

    if (resultLeft) {
        path.push(left);
        return true;
    }

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
  const path: Point[] = [];
  const seen: boolean[][] = [];

  walk(maze, wall, start, end, seen, path)
  
  return path;
}
