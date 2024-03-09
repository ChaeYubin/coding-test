import java.io.*;
import java.util.*;

class Meeting implements Comparable<Meeting> {

  int start, end;

  Meeting(int start, int end) {
    this.start = start;
    this.end = end;
  }

  @Override
  public int compareTo(Meeting o) {
    if (this.end == o.end) {
      return this.start - o.start;
    } else {
      return this.end - o.end;
    }
  }
}

class Main {

  public int solution(ArrayList<Meeting> meeting) {
    int cnt = 0;
    int end = 0;

    // 끝나는 시간을 기준으로 오름차순 정렬
    Collections.sort(meeting);

    for (Meeting m : meeting) {
      if (end <= m.start) {
        end = m.end;
        cnt++;
      }
    }

    return cnt;
  }

  public static void main(String[] args) throws IOException {
    Main T = new Main();

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());
    ArrayList<Meeting> meeting = new ArrayList<>();

    StringTokenizer st;

    for (int i = 0; i < n; i++) {
      st = new StringTokenizer(br.readLine());
      meeting.add(
        new Meeting(
          Integer.parseInt(st.nextToken()),
          Integer.parseInt(st.nextToken())
        )
      );
    }

    System.out.println(T.solution(meeting));
  }
}
