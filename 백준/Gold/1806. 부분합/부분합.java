import java.util.*;

class Main {

  public int solution(int n, int s, int[] arr) {
    int answer = Integer.MAX_VALUE;
    int sum = 0;

    int p1 = 0;
    int p2 = 0;

    while (true) {
      if (sum >= s) {
        if (answer > p2 - p1) {
          answer = p2 - p1;
        }
        sum -= arr[p1++];
      } else if (p2 == n) {
        break;
      } else { // sum < m일 때
        sum += arr[p2++];
      }
    }

    return answer == Integer.MAX_VALUE ? 0 : answer;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();
    int s = kb.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = kb.nextInt();
    }
    kb.close();

    System.out.println(T.solution(n, s, arr));
  }
}
