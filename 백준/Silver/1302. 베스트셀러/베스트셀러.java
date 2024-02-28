import java.util.*;

public class Main {

  public static void main(String[] args) {
    // Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();

    // 입력
    HashMap<String, Integer> map = new HashMap<>();
    for (int i = 0; i < n; i++) {
      String s = kb.next();
      map.put(s, map.getOrDefault(s, 0) + 1);
    }

    kb.close();

    // value로 값 정렬하기
    List<String> keys = new ArrayList<>(map.keySet());
    Collections.sort(keys, (v1, v2) -> (map.get(v2).compareTo(map.get(v1))));

    // 최대로 팔린 책의 권 수를 가져온다.
    int max = map.get(keys.get(0));
    TreeSet<String> set = new TreeSet<>();

    for (String key : keys) {
      if (map.get(key) == max) set.add(key);
    }

    System.out.println(set.first());
  }
}
