import java.io.*;
import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
    ArrayDeque<Integer> stack = new ArrayDeque<>();

    for (int pos : moves) {
      for (int i = 0; i < board.length; i++) {
        if (board[i][pos - 1] != 0) {
          int tmp = board[i][pos - 1];
          board[i][pos - 1] = 0;

          if (!stack.isEmpty() && tmp == stack.peekLast()) {
            answer += 2;
            stack.pollLast();
          } else {
            stack.add(tmp);
          }

          break;
        }
      }
    }

    return answer;
    }
}