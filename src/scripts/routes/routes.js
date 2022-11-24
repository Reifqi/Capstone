import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/detail/:id': Detail,
};

export default routes;
