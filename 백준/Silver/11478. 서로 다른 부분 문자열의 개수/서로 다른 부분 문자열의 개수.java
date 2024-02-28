import java.util.*;

class Main {

  public int solution(String s) {
    TreeSet<String> t = new TreeSet<>();

    for (int i = 0; i < s.length(); i++) {
      for (int j = i + 1; j <= s.length(); j++) {
        t.add(s.substring(i, j));
      }
    }

    return t.size();
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);
    String s = kb.next();
    kb.close();

    System.out.println(T.solution(s));
  }
}
