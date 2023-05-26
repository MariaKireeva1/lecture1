import { api } from "./api/api.js";
import { renderExistedHeroes } from "./feature/renderExisted.js";
import { renderAddForm } from "./feature/renderAddForm.js";
renderAddForm()

api.GET_EXISTED().then((res) => {
  res.forEach((item) => renderExistedHeroes(item))
})
