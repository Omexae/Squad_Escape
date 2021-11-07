const escapes = [
  {
    id: 1,
    title: "Escape Game de l'année",
    message:
      "le thème est secret, il est possble de le trouver mais nous vons dirons jamais où.",
    prix: "Gratuit",
    url: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
  },
  {
    id: 2,
    title: "Chasse au trésor",
    message:
      "La chasse au trésor sera un projet réalisé par les membres L1 de groupe escape en autonomie",
    prix: "Gratuit",
    url: "https://images.unsplash.com/photo-1623011096060-2cfeab2928d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
  },
];

export default {
  getEscape(cb) {
    cb(escapes);
  },
};
