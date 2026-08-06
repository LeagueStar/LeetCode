class Solution {
    public int maximumSafenessFactor(List<List<Integer>> grid) {
        int n = grid.size();
        int n2 = n * n;
        int[] dist = new int[n2];
        for (int i = 0; i < n2; i++) dist[i] = -1;
        int[] q = new int[n2];
        int head = 0, tail = 0;
        for (int i = 0; i < n; i++) {
            List<Integer> row = grid.get(i);
            for (int j = 0; j < n; j++) {
                if (row.get(j) == 1) {
                    int idx = i * n + j;
                    dist[idx] = 0;
                    q[tail++] = idx;
                }
            }
        }
        while (head < tail) {
            int curr = q[head++];
            int r = curr / n;
            int c = curr % n;
            int d = dist[curr];
            int next = curr - n;
            if (r > 0 && dist[next] == -1) { dist[next] = d + 1; q[tail++] = next; }
            next = curr + n;
            if (r < n - 1 && dist[next] == -1) { dist[next] = d + 1; q[tail++] = next; }
            next = curr - 1;
            if (c > 0 && dist[next] == -1) { dist[next] = d + 1; q[tail++] = next; }
            next = curr + 1;
            if (c < n - 1 && dist[next] == -1) { dist[next] = d + 1; q[tail++] = next; }
        }
        int low = 0, high = dist[0] < dist[n2 - 1] ? dist[0] : dist[n2 - 1];
        int ans = 0;
        int[] visited = new int[n2];
        int run = 0;
        while (low <= high) {
            int mid = (low + high) >>> 1;
            run++;
            head = 0;
            tail = 0;
            q[tail++] = 0;
            visited[0] = run;
            boolean found = false;
            while (head < tail) {
                int curr = q[head++];
                if (curr == n2 - 1) {
                    found = true;
                    break;
                }
                int r = curr / n;
                int c = curr % n;
                int next = curr - n;
                if (r > 0 && visited[next] != run && dist[next] >= mid) { visited[next] = run; q[tail++] = next; }
                next = curr + n;
                if (r < n - 1 && visited[next] != run && dist[next] >= mid) { visited[next] = run; q[tail++] = next; }
                next = curr - 1;
                if (c > 0 && visited[next] != run && dist[next] >= mid) { visited[next] = run; q[tail++] = next; }
                next = curr + 1;
                if (c < n - 1 && visited[next] != run && dist[next] >= mid) { visited[next] = run; q[tail++] = next; }
            }
            if (found) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}