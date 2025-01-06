import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer'; // Giả sử bạn có một component Footer
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AnimatedBackground />
      <main>
        <h1>Welcome to My Blog</h1>
        <p>This is the homepage of my blog.</p>
        {/* Thêm các thành phần khác tại đây */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;