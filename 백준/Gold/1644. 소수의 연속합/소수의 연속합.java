import java.util.*;

class Main {

  public int solution(int n) {
    int answer = 0;

    int[] isPrime = new int[n + 1];
    ArrayList<Integer> primeNumber = new ArrayList<Integer>();

    // 소수 배열 만들기
    for (int i = 2; i <= n; i++) {
      if (isPrime[i] == 0) {
        primeNumber.add(i);

        for (int j = i; j <= n; j += i) {
          isPrime[j] = 1;
        }
      }
    }

    int length = primeNumber.size();

    int p1 = 0;
    int p2 = 0;

    int sum = 0;

    while (true) {
      if (sum >= n) {
        sum -= primeNumber.get(p1++);
      } else if (p2 == length) {
        break;
      } else {
        sum += primeNumber.get(p2++);
      }

      if (sum == n) answer++;
    }

    return answer;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);

    int n = kb.nextInt();

    kb.close();

    System.out.println(T.solution(n));
  }
}
