import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";
function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) return <p>Loading...</p>;
  const cars = carsData.filter(car => car.category === slug);
  if (cars.length === 0) return <p>No Cars Found in this category! </p>;

  return (
   <CarsList  cars={cars}/>
  );
}

export default CategoryPage;
