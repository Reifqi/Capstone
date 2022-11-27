import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';
import catHealth from '../view/pages/catHealth';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/cathealth': catHealth,
  '/detail/:id': Detail,
};

export default routes;
