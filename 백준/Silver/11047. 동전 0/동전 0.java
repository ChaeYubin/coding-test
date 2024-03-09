import java.io.*;
import java.util.*;

class Main {

  public int solution(int n, int k, int[] arr) {
    int cnt = 0;

    int i = n - 1;
    while (k > 0) {
      if (k - arr[i] >= 0) {
        k -= arr[i];
        cnt++;
      } else {
        i--;
      }
    }
    return cnt;
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());

    int[] arr = new int[n]; // 동전의 가치를 담을 배열

    for (int i = 0; i < n; i++) {
      arr[i] = Integer.parseInt(br.readLine());
    }

    System.out.println(T.solution(n, k, arr));
  }
}
