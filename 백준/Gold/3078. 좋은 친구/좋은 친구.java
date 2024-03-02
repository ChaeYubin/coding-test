import java.io.*;
import java.lang.reflect.Array;
import java.util.*;

class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken()); // 학생 수
    int k = Integer.parseInt(st.nextToken()); // 등수 차이

    // 큐 배열 생성
    Queue<Integer>[] queues = new ArrayDeque[21];

    // 각 큐에 ArrayDeque 인스턴스 할당
    for (int i = 0; i < 21; i++) {
      queues[i] = new ArrayDeque<>();
    }

    long answer = 0; // 좋은 친구 쌍의 수 (입력의 크기 때문에 int가 아닌 long 타입으로 선언해야 한다.)

    for (int i = 0; i < n; i++) {
      int length = br.readLine().length(); // 이름의 길이를 계산한다.

      if (queues[length].isEmpty()) {
        queues[length].offer(i);
      } else {
        while (i - queues[length].peek() > k) {
          queues[length].poll();

          if (queues[length].isEmpty()) {
            break;
          }
        }

        answer += queues[length].size();
        queues[length].offer(i);
      }
    }

    System.out.println(answer);
  }
}
