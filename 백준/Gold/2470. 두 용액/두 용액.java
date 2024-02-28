import java.io.*;
import java.util.*;

class Main {

  public int[] solution(int n, int[] values) {
    int[] answer = new int[2];

    // 입력받은 용액의 특성값들을 오름차순으로 정렬한다.
    Arrays.sort(values);

    int p1 = 0;
    int p2 = n - 1;

    int min = Integer.MAX_VALUE;

    while (true) {
      // sum: 두 용액의 합
      int sum = values[p1] + values[p2];

      // sum < min이라면 답을 갱신한다.
      if (Math.abs(sum) < min) {
        min = Math.abs(sum);
        answer[0] = values[p1];
        answer[1] = values[p2];

        // 만약 sum = 0이라면 반복을 중단한다.
        if (sum == 0) break;
      }

      // 두 용액의 합이 0보다 작으면 p1을 증가시킨다. 합이 더 커져야 하므로.
      if (sum < 0) p1++;
      // 두 용액의 합이 0보다 크면 p2를 감소시킨다. 합이 더 작아져야 하므로.
      else p2--;

      // p2과 p2가 만나면 반복을 중단한다. (모든 경우 탐색 완료))
      if (p1 == p2) break;
    }

    return answer;
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());

    int[] values = new int[n];
    StringTokenizer st = new StringTokenizer(br.readLine());
    for (int i = 0; i < n; i++) {
      values[i] = Integer.parseInt(st.nextToken());
    }

    int[] answer = T.solution(n, values);

    for (int x : answer) {
      System.out.print(x + " ");
    }
  }
}
