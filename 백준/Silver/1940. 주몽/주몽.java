import java.util.*;

class Main {

  public int solution(int m, int n, int[] arr) {
    int answer = 0;
    int sum = 0;

    Arrays.sort(arr); // 배열 정렬

    int p1 = 0;
    int p2 = n - 1;

    while (p1 < p2) {
      sum = arr[p1] + arr[p2];

      if (sum < m) {
        p1++;
      } else if (sum > m) {
        p2--;
      } else {
        answer++;
        p1++;
        p2--;
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
