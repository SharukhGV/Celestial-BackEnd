const db = require("../db/dbConfig.js");

const getAllstars = async () => await db.any("SELECT * FROM stars");

const getOnestar = async (id) =>
  await db.one("SELECT * FROM stars WHERE id=$1", id);

// const updateOnestar = async (id, star) => {
//   const { name, good_star, star_description, topic, date, night, user_id} = star;

//   return await db.one(
//     "UPDATE stars SET name=$1, good_star=$2, star_description=$3, topic=$4, date=$5, night=$6, user_id=$7 WHERE id=$8 RETURNING *",
//     [name, good_star, star_description, topic, date, night, user_id, id]
//   );
// };

const updateOnestar = async (id, star) => {
  const { iau_name, star_catalogue, constellation, type_star, colorindex, apparentmag, absolutemag, distance} = star;

  return await db.one(
    "UPDATE stars SET iau_name=$1, star_catalogue=$2, constellation=$3, type_star=$4, colorindex=$5, apparentmag=$6, absolutemag=$7, distance=$8 WHERE id=$9 RETURNING *",
    [iau_name, star_catalogue, constellation, type_star, colorindex, apparentmag, absolutemag, distance, id]
  );
};

const deletestar = async (id) =>
  await db.one("DELETE FROM stars WHERE id = $1 RETURNING *", id);

  const createstar = async (star) =>
  await db.one(
    "INSERT INTO stars (name, good_star, star_description, topic, date, night) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      star.name,
      star.good_star,
      star.star_description,
      star.topic,
      star.date,
      star.night,
      
    ]
  );



  // const createstar = async (star) =>
  // await db.one(
  //   "INSERT INTO stars (name, good_star, star_description, topic, date, night, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
  //   [
  //     star.name,
  //     star.good_star,
  //     star.star_description,
  //     star.topic,
  //     star.date,
  //     star.night,
  //     star.user_id
      
  //   ]
  // );

module.exports = {
    getAllstars,
    getOnestar,
    updateOnestar,
    deletestar,
    createstar,
};