import java.util.*;

class Main {

  public int solution(int n, int m, int[] arr) {
    int answer = 0; // 경우의 수

    int p1 = 0;
    int p2 = 0;

    int sum = 0; // p1부터 p2까지의 합을 저장할 변수

    while (true) {
      if (sum >= m) {
        sum -= arr[p1++];
      } else if (p2 == n) {
        break;
      } else {
        sum += arr[p2++];
      }

      if (sum == m) answer++;
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

    System.out.println(T.solution(n, m, arr));
  }
}
