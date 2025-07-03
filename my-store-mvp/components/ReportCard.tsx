export default function ReportCard({ data }) {
  return (
    <div className="border rounded p-4 shadow-md my-2">
      <h2 className="text-lg font-semibold">{data.region} - {data.industry}</h2>
      <p>예상 매출: {data.expected_sales}만 원</p>
      <p>순이익: {data.expected_profit}만 원</p>
      <p>임대료: {data.monthly_rent}만 원</p>
      <p>경쟁도: {data.competition_level}</p>
      <p>적합도: {data.startup_score}</p>
    </div>
  );
}