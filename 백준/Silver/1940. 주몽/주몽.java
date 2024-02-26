import java.util.*;

class Main {

  public int solution(int m, int n, int[] arr) {
    int answer = 0;
    int sum = 0;

    for (int i = 0; i < n; i++) {
      for (int j = i + 1; j < n; j++) {
        sum = arr[i] + arr[j];
        if (sum == m) {
          answer++;
          break;
        }
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();
    int m = kb.nextInt();

    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = kb.nextInt();
    }

    kb.close();

    System.out.println(T.solution(m, n, arr));
  }
}
