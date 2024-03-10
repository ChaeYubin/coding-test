import java.io.*;
import java.util.*;

class Main {

  static int n, m, v;
  static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
  static boolean[] visited; // 방문 여부를 저장할 배열
  static ArrayList<Integer> answer = new ArrayList<>(); // 방문 노드를 순서대로 담을 배열
  boolean isDone = false;
  int count = 0;

  public void DFS(int v) {
    for (int nv : graph.get(v)) {
      if (!visited[nv]) {
        visited[nv] = true;
        answer.add(nv);
        DFS(nv);
      }
    }
  }

  public void BFS(int v) {
    Queue<Integer> queue = new LinkedList<>();
    visited[v] = true;
    answer.add(v);
    queue.offer(v);

    while (!queue.isEmpty()) {
      int cv = queue.poll();

      for (int nv : graph.get(cv)) {
        if (!visited[nv]) {
          visited[nv] = true;
          answer.add(nv);
          queue.add(nv);
        }
      }
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    n = Integer.parseInt(st.nextToken()); // 정점의 개수
    m = Integer.parseInt(st.nextToken()); // 간선의 개수
    v = Integer.parseInt(st.nextToken()); // 탐색을 시작할 정점의 번호

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

    // 정점에 연결된 노드들을 오름차순으로 정렬
    // (정점 번호가 작은 것을 먼저 방문하기 위해서)
    for (ArrayList<Integer> list : graph) {
      Collections.sort(list);
    }

    visited[v] = true;
    answer.add(v);
    T.DFS(v);

    for (int x : answer) {
      System.out.print(x + " ");
    }

    System.out.println();

    // visited 배열 초기화
    for (int i = 0; i <= n; i++) {
      visited[i] = false;
    }

    // answer 초기화
    answer.clear();

    T.BFS(v);

    for (int x : answer) {
      System.out.print(x + " ");
    }
  }
}
