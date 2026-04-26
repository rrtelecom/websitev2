export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="spinner" role="status" aria-label="Loading">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="spinner-blade" />
        ))}
      </div>
    </div>
  )
}
