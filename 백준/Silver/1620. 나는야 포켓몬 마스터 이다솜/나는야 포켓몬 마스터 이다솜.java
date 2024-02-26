import java.util.*;

class Main {

  // public void solution(int n, int m, HashMap<Integer, String> map, String[] question) {
  //   for (String x : question) {
  //     if (isNumeric(x)) { // x가 숫자라면
  //       int num = Integer.parseInt(x);
  //       System.out.println(map.get(num));
  //     } else { // x가 알파벳이라면
  //       for (int key : map.keySet()) {
  //         if (map.get(key).equals(x)) {
  //           System.out.println(key);
  //           break;
  //         }
  //       }
  //     }
  //   }

  //   return;
  // }

  public static boolean isNumeric(String str) {
    return str.matches("[0-9*$]");
  }

  public static void main(String[] args) {
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();
    int m = kb.nextInt();

    HashMap<Integer, String> map1 = new HashMap<>();
    HashMap<String, Integer> map2 = new HashMap<>();

    String name = "";

    for (int i = 0; i < n; i++) {
      name = kb.next();
      map1.put(i + 1, name);
      map2.put(name, i + 1);
    }

    String[] question = new String[m];
    for (int i = 0; i < m; i++) {
      question[i] = kb.next();
    }

    for (String x : question) {
      if (
        Character.isUpperCase(x.charAt(0)) ||
        Character.isUpperCase(x.charAt(x.length() - 1))
      ) { // x가 알파벳이라면
        System.out.println(map2.get(x));
      } else { // x가 숫자라면
        int num = Integer.parseInt(x);
        System.out.println(map1.get(num));
      }
    }

    kb.close();
  }
}
