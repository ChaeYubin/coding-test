import java.util.*;

class Main {

  public void solution(int n, int x, int[] arr) {
    int answer = 0;
    int sum = 0;
    int max = 0;
    int count = 1;

    // 앞부분 x개의 합으로 sum을 초기화한다.
    for (int i = 0; i < x; i++) {
      sum += arr[i];
      max = Math.max(max, sum);
    }

    for (int i = x; i < n; i++) {
      // 슬라이딩 윈도우를 한칸 이동시킨다.
      sum = sum + arr[i] - arr[i - x];

      if (max < sum) {
        max = sum;
        count = 1;
      } else if (max == sum) {
        count++;
      }
    }

    if (max == 0) {
      System.out.println("SAD");
    } else {
      System.out.println(max + "\n" + count);
    }

    return;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();
    int x = kb.nextInt();

    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = kb.nextInt();
    }

    kb.close();

    T.solution(n, x, arr);
  }
}
