import java.util.*;

class Main {

  public void solution(String[][] arr) {
    // 역순으로 저장한다.
    TreeSet<String> t = new TreeSet<>(Collections.reverseOrder());

    for (int i = 0; i < arr.length; i++) {
      if (arr[i][1].equals("enter")) t.add(arr[i][0]); else if (
        arr[i][1].equals("leave")
      ) t.remove(arr[i][0]);
    }

    for (String name : t) {
      System.out.println(name);
    }
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);
    int n = kb.nextInt();

    String[][] arr = new String[n][2];

    for (int i = 0; i < n; i++) {
      arr[i][0] = kb.next();
      arr[i][1] = kb.next();
    }

    kb.close();

    T.solution(arr);
  }
}
