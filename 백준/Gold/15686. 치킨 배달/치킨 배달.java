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

  static int answer = Integer.MAX_VALUE; // 도시의 최소 피자 배달 거리
  static int n, m;
  static int[] combi;
  static ArrayList<Point> house;
  static ArrayList<Point> pizza;

  public void DFS(int L, int start) {
    if (L == m) {
      int sum = 0;

      // 피자집 m개를 선택했다면 각 집의 피자배달거리를 구한다.
      for (Point h : house) {
        int dis = Integer.MAX_VALUE;
        for (int i : combi) {
          dis =
            Math.min(
              dis,
              Math.abs(h.x - pizza.get(i).x) + Math.abs(h.y - pizza.get(i).y)
            );
        }
        // dis = 집의 피자 배달 거리
        sum += dis;
      }

      answer = Math.min(answer, sum);
    } else {
      for (int i = start; i < pizza.size(); i++) {
        combi[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    n = Integer.parseInt(st.nextToken());
    m = Integer.parseInt(st.nextToken());

    house = new ArrayList<>();
    pizza = new ArrayList<>();

    for (int i = 0; i < n; i++) {
      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < n; j++) {
        int tmp = Integer.parseInt(st.nextToken());

        if (tmp == 1) {
          // 집이면 house에 좌표를 추가한다.
          house.add(new Point(i, j));
        } else if (tmp == 2) {
          // 피자집이면 pizza에 좌표를 추가한다.
          pizza.add(new Point(i, j));
        }
      }
    }

    combi = new int[m]; // 조합의 수, M개

    T.DFS(0, 0);

    System.out.println(answer);
  }
}
