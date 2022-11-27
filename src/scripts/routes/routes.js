import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';
import Lingkungan from '../view/pages/lingkungan';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/detail/:id': Detail,
  '/lingkungan': Lingkungan,
};

export default routes;
