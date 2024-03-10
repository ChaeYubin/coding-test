import java.io.*;
import java.util.*;

class Main {

  static int n, m, v;
  static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
  static boolean[] visited; // 방문 여부를 저장할 배열
  static int answer = 0; // 방문 노드를 순서대로 담을 배열

  public void DFS(int v) {
    for (int nv : graph.get(v)) {
      if (!visited[nv]) {
        visited[nv] = true;
        answer++;
        DFS(nv);
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st;

    n = Integer.parseInt(br.readLine()); // 정점의 개수
    m = Integer.parseInt(br.readLine()); // 간선의 개수

    visited = new boolean[n + 1];

    for (int i = 0; i <= n; i++) {
      graph.add(new ArrayList<Integer>());
      visited[i] = false;
    }

    for (int i = 0; i < m; i++) {
      st = new StringTokenizer(br.readLine());

      int first = Integer.parseInt(st.nextToken());
      int second = Integer.parseInt(st.nextToken());

      // 양방향 간선 추가
      graph.get(first).add(second);
      graph.get(second).add(first);
    }

    visited[1] = true;
    T.DFS(1);

    System.out.println(answer);
  }
}
