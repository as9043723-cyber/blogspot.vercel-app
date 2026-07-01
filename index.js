export default function Home() {
  return (
    <main style={{fontFamily: 'Arial', margin: 0}}>
      <div style={{textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '55px', margin: 0}}>📝 BlogSpot</h1>
        <p style={{fontSize: '24px'}}>Free Blog Banao + Paise Kamao</p>
        <p>0 Investment → 2 Min Setup → AdSense Ready</p>
        <button style={{marginTop: '20px', padding: '15px 40px', fontSize: '18px', background: '#ff4757', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer'}}>Start Free Blog →</button>
      </div>
      
      <div style={{padding: '50px 20px', maxWidth: '800px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        <div style={{background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}><h3>💰 100% Free</h3><p>1 rupaya nahi lagega</p></div>
        <div style={{background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}><h3>⚡ 2 Min Live</h3><p>Coding ki zarurat nahi</p></div>
        <div style={{background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}><h3>📱 Mobile Ready</h3><p>Phone se hi likho</p></div>
        <div style={{background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}><h3>🚀 AdSense Ready</h3><p>ID daalo, earning shuru</p></div>
      </div>
    </main>
  )
}
