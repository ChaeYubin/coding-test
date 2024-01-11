function solution(id_list, report, k) {
  const uniqReport = [...new Set(report)];
  const report_list = {};
  const answer = new Array(id_list.length).fill(0);

  for (let r of uniqReport) {
    r = r.split(" ");
    let reporter_id = id_list.indexOf(r[0]);
    let reported_id = id_list.indexOf(r[1]);

    report_list[reported_id] =
      typeof report_list[reported_id] === "undefined"
        ? [reporter_id]
        : report_list[reported_id].concat(reporter_id);
  }

  for (let key in report_list) {
    if (report_list[key].length >= k) {
      for (let i of report_list[key]) {
        answer[i]++;
      }
    }
  }

  return answer;
}
