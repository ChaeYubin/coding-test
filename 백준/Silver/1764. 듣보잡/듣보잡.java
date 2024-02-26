import java.util.*;

class Main {

  public void solution(int n, int m, String[] arr1, String[] arr2) {
    TreeSet<String> set = new TreeSet<>();
    TreeSet<String> answer = new TreeSet<>();

    for (int i = 0; i < n; i++) {
      set.add(arr1[i]);
    }

    for (int i = 0; i < m; i++) {
      if (set.contains(arr2[i])) {
        answer.add(arr2[i]);
      }
    }

    System.out.println(answer.size());

    for (String s : answer) {
      System.out.println(s);
    }
    return;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();
    int m = kb.nextInt();

    String[] arr1 = new String[n];

    for (int i = 0; i < n; i++) {
      arr1[i] = kb.next();
    }

    String[] arr2 = new String[m];

    for (int i = 0; i < m; i++) {
      arr2[i] = kb.next();
    }

    kb.close();

    T.solution(n, m, arr1, arr2);
  }
}
