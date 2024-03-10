import java.io.*;
import java.util.*;

class Map {

  int w;
  int h;
  int[][] map;

  public Map(int w, int h) {
    this.w = w;
    this.h = h;
    this.map = new int[h][w];
  }
}

class Main {

  static int answer;
  static int[][] map;
  static int height;
  static int width;
  int[] dx = { -1, -1, 0, 1, 1, 1, 0, -1 };
  int[] dy = { 0, 1, 1, 1, 0, -1, -1, -1 };

  public void DFS(int h, int w) {
    for (int i = 0; i < 8; i++) {
      int nh = h + dx[i];
      int nw = w + dy[i];

      if (nh >= 0 && nh < height && nw >= 0 && nw < width && map[nh][nw] == 1) {
        map[nh][nw] = 0;
        DFS(nh, nw);
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 지도 리스트 생성
    ArrayList<Map> mapList = new ArrayList<>();

    while (true) {
      StringTokenizer st = new StringTokenizer(br.readLine());

      int w = Integer.parseInt(st.nextToken()); // 지도의 너비
      int h = Integer.parseInt(st.nextToken()); // 지도의 높이

      // 종료 조건
      if (w == 0 && h == 0) break;

      Map newMap = new Map(w, h);

      for (int i = 0; i < h; i++) {
        st = new StringTokenizer(br.readLine());

        for (int j = 0; j < w; j++) {
          newMap.map[i][j] = Integer.parseInt(st.nextToken());
        }
      }

      mapList.add(newMap);
    }

    for (Map m : mapList) {
      answer = 0;
      map = m.map.clone();
      height = m.h;
      width = m.w;

      for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
          // 섬을 발견했다. answer를 증가시키고 방문한 지점들을 0으로 바꿔 다시 방문할 수 없도록 한다.
          if (map[i][j] == 1) {
            map[i][j] = 0;
            answer++;
            T.DFS(i, j);
          }
        }
      }
      System.out.println(answer);
    }
  }
}
