import java.io.*;
import java.util.*;

class Main {

  static int k;

  public int count(int[] arr, long length) {
    int cnt = 0; // 자른 랜선의 개수

    for (int i = 0; i < k; i++) {
      cnt += arr[i] / length;
    }

    return cnt;
  }

  public long solution(int n, int[] arr) {
    long low = 1; // 자를 수 있는 최소 길이는 1cm
    long high = Arrays.stream(arr).max().getAsInt(); // 기존에 있는 랜선 중 가장 긴 랜선의 길이가 최대 길이

    while (low <= high) {
      long mid = (low + high) / 2;

      if (count(arr, mid) < n) {
        // mid 길이로 잘랐을 때, 랜선의 개수가 n개보다 작다면
        // mid 길이를 더 짧게 잘라야 한다.
        high = mid - 1;
      } else {
        // mid 길이로 잘랐을 때, 랜선의 개수가 n개 이상이라면
        // mid 길이를 더 길게 잘라야 한다.
        low = mid + 1;
      }
    }

    return high;
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());
    k = Integer.parseInt(st.nextToken()); // 이미 가지고 있는 랜선의 개수
    int n = Integer.parseInt(st.nextToken()); // 필요한 랜선의 개수

    int[] arr = new int[k];

    for (int i = 0; i < k; i++) {
      arr[i] = Integer.parseInt(br.readLine());
    }

    System.out.println(T.solution(n, arr));
  }
}
