import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';
import Lingkungan from '../view/pages/lingkungan';
import catHealth from '../view/pages/catHealth';
import catType from '../view/pages/catType';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/cathealth': catHealth,
  '/detail/:id': Detail,
  '/lingkungan': Lingkungan,
  '/cattype': catType,
};

export default routes;
