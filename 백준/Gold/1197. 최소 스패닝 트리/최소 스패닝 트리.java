import java.io.*;
import java.util.*;

class Edge implements Comparable<Edge> {

  int v1;
  int v2;
  int cost;

  Edge(int v1, int v2, int cost) {
    this.v1 = v1;
    this.v2 = v2;
    this.cost = cost;
  }

  @Override
  public int compareTo(Edge o) {
    return this.cost - o.cost;
  }
}

class Main {

  static int[] unf;

  public static int Find(int v) {
    if (v == unf[v]) return v; else return unf[v] = Find(unf[v]);
  }

  public static void Union(int a, int b) {
    int fa = Find(a);
    int fb = Find(b);
    if (fa != fb) unf[fa] = fb;
  }

  public int kruskal(ArrayList<Edge> edge) {
    int answer = 0;

    // 간선들을 비용을 기준으로 오름차순 정렬한다. (최소 비용을 구해야 하므로 비용이 적은 것부터 선택한다.)
    Collections.sort(edge);

    for (int i = 0; i < edge.size(); i++) {
      int a = edge.get(i).v1;
      int b = edge.get(i).v2;
      int c = edge.get(i).cost;

      // a와 b가 같은 집합에 있지 않다면 간선을 추가한다.
      // 같은 집합에 있는 경우, 간선을 추가하면 사이클이 생성되게 된다. -> 트리가 아님!
      if (Find(a) != Find(b)) {
        answer += c;
        Union(a, b);
      }
    }

    return answer;
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int v = Integer.parseInt(st.nextToken()); // 도시의 개수(정점)
    int e = Integer.parseInt(st.nextToken()); // 도로의 개수(간선)

    unf = new int[v + 1];
    for (int i = 0; i <= v; i++) unf[i] = i; // unf 배열 초기화
    ArrayList<Edge> edge = new ArrayList<>();

    for (int i = 0; i < e; i++) {
      st = new StringTokenizer(br.readLine());

      int a = Integer.parseInt(st.nextToken());
      int b = Integer.parseInt(st.nextToken());
      int c = Integer.parseInt(st.nextToken());

      edge.add(new Edge(a, b, c));
    }

    System.out.println(T.kruskal(edge));
  }
}
