import java.io.*;
import java.util.*;

class Point {

  int x;
  int y;

  Point(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

class Main {

  static int n, m;
  static int[][] box, dis;
  static Queue<Point> queue = new LinkedList<>();
  int[] dx = { 0, 1, 0, -1 };
  int[] dy = { -1, 0, 1, 0 };

  public void BFS() {
    while (!queue.isEmpty()) {
      Point tmp = queue.poll();

      for (int i = 0; i < 4; i++) {
        int nx = tmp.x + dx[i];
        int ny = tmp.y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && box[nx][ny] == 0) {
          box[nx][ny] = 1; // 익지 않은 토마토를 만나면 익었다고 표시한다.
          dis[nx][ny] = dis[tmp.x][tmp.y] + 1;
          queue.offer(new Point(nx, ny));
        }
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    m = Integer.parseInt(st.nextToken());
    n = Integer.parseInt(st.nextToken());

    box = new int[n][m];
    dis = new int[n][m];

    for (int i = 0; i < n; i++) {
      st = new StringTokenizer(br.readLine());

      for (int j = 0; j < m; j++) {
        box[i][j] = Integer.parseInt(st.nextToken());

        // 익어있는 토마토들을 차례대로 큐에 넣어둔다.
        if (box[i][j] == 1) {
          queue.offer(new Point(i, j));
        }
      }
    }

    T.BFS();

    int answer = 0;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        // 익지 않은 토마토가 존재한다면 -1을 출력하고 리턴한다.
        if (box[i][j] == 0) {
          System.out.println(-1);
          return;
        } else {
          // 토마토가 익기까지 며칠이 걸렸는지 dis에 저장되어 있다.
          // 이 dis 배열에서 가장 큰 값이 모든 토마토가 익는 데 걸린 시간이다.
          answer = Math.max(answer, dis[i][j]);
        }
      }
    }

    System.out.println(answer);
  }
}
