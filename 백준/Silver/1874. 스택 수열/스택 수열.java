import java.io.*;
import java.util.*;

class Main {

  public void solution(int n, int[] arr) {
    ArrayList<Character> answer = new ArrayList<>();
    int index = 0; // 입력으로 들어온 수열을 순서대로 가리킬 인덱스
    int num = 1; // 1~n까지의 수를 나타낼 변수

    Deque<Integer> stack = new LinkedList<>();

    while (index < n) {
      // index가 가리키고 있는 값이 될 때까지 num을 증가시켜 가면서 스택에 넣는다.
      for (; num <= arr[index]; num++) {
        stack.offerLast(num);
        answer.add('+');
      }
      // 가장 위에 있는 원소와 인덱스가 가리키고 있는 원소를 비교한다.
      if (stack.peekLast() == arr[index]) {
        stack.pollLast();
        answer.add('-');
        index++;
      }
      // 가장 위에 있는 원소와 index가 가리키고 있는 원소가 다르다면 num을 스택에 추가한다.
      else {
        System.out.println("NO");
        return;
      }
    }

    // 이전에 리턴되지 않았다면 성공한 경우이므로 answer 배열의 값을 모두 출력한다.
    for (char x : answer) {
      System.out.println(x);
    }
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());

    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = Integer.parseInt(br.readLine());
    }

    T.solution(n, arr);
  }
}
