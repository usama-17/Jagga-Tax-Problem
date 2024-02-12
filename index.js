function floydWarshall(graph, V) {
    let dist = Array.from({ length: V }, () => Array(V).fill(Infinity));

    for (let i = 0; i < V; i++) {
        dist[i][i] = 0;
    }

    graph.forEach(([u, v]) => {
        dist[u - 1][v - 1] = 1; // Assuming the edge weight is 1
        dist[v - 1][u - 1] = 1; // Assuming undirected graph
    });

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

function calculateJRP(dist, V) {
    let jrp = Array(V).fill(0);

    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            for (let k = 0; k < V; k++) {
                if (i !== j && i !== k && j !== k && dist[j][i] + dist[i][k] === dist[j][k]) {
                    jrp[i]++;
                }
            }
        }
    }

    return jrp;
}

function jaggaTax(input) {
    let lines = input.split('\n');
    let T = parseInt(lines[0]);
    let index = 1;

    while (T--) {
        let [N, M] = lines[index++].split(' ').map(Number);
        let graph = [];

        for (let i = 0; i < M; i++) {
            graph.push(lines[index++].split(' ').map(Number));
        }

        let dist = floydWarshall(graph, N);
        let jrp = calculateJRP(dist, N);

        let result = jrp
            .map((value, idx) => ({ index: idx + 1, value }))
            .sort((a, b) => b.value - a.value || a.index - b.index)
            .slice(0, 5)
            .map((a) => a.index);

        console.log(result.join('\n'));
    }
}

// Sample Input
const sampleInput = `1
6 6
1 2
1 3
2 4
3 4
4 5
4 6`;

jaggaTax(sampleInput);
