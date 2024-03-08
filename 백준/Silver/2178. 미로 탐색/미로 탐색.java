import java.io.*;
import java.util.*;

class Point {

  int x, y;

  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

class Main {

  static int n, m;
  static int[][] arr, dis;
  int[] dx = { -1, 0, 1, 0 };
  int[] dy = { 0, 1, 0, -1 };

  public void BFS(int x, int y) {
    Queue<Point> q = new LinkedList<>();
    q.offer(new Point(x, y));
    arr[x][y] = 1;

    while (!q.isEmpty()) {
      Point tmp = q.poll();

      for (int i = 0; i < 4; i++) {
        int nx = tmp.x + dx[i];
        int ny = tmp.y + dy[i];

        // (nx, ny)가 갈 수 있는 지점인지 확인
        if (nx >= 1 && nx <= n && ny >= 1 && ny <= m && arr[nx][ny] == 1) {
          arr[nx][ny] = 0;
          dis[nx][ny] = dis[tmp.x][tmp.y] + 1;
          q.offer(new Point(nx, ny));
        }
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());

    // N x M 크기의 2차원 배열 선언(미로)
    arr = new int[n + 1][m + 1];
    dis = new int[n + 1][m + 1];

    for (int i = 1; i <= n; i++) {
      String s = br.readLine();

      for (int j = 1; j <= m; j++) {
        arr[i][j] = s.charAt(j - 1) - '0';
      }
    }

    T.BFS(1, 1);
    System.out.println(dis[n][m] + 1);
  }
}
