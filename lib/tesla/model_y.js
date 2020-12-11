const pool = require('../utils/pool');

module.exports = class ModelY {
  id;
  title;
  descript;
  model;
  color;
  wheelType;
  interior;
  layout;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.descript = row.descript;
    this.model = row.model;
    this.color = row.color;
    this.wheelType = row.wheel_type;
    this.interior = row.interior;
    this.layout = row.layout;
  }

  // CRUD-------------------------------------

  static async insert({ title, descript, model, color, wheelType, interior, layout }) {
    const { rows } = await pool.query(
      'INSERT INTO model_y (title, descript, model, color, wheel_type, interior, layout) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, descript, model, color, wheelType, interior, layout]
    );

    return new ModelY(rows[0]);
  }

  // ------------------------------------------

  static async find() {
    const { rows } = await pool.query('SELECT * FROM model_y');

    return rows.map(row => new ModelY(row));
  }

  // -------------------------------------------

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM model_y WHERE id=$1',
      [id]
    );

    if(!rows[0]) throw new Error(`No model with ${id}`);
    return new ModelY(rows[0]);
  }

  // --------------------------------------------

  static async update(id, { title, descript, model, color, wheelType, interior, layout }) {
    const { rows } = await pool.query(
      `UPDATE model_y
      SET title=$1,
          descript=$2,
          model=$3,
          color=$4,
          wheel_type=$5,
          interior=$6,
          layout=$7
      WHERE id=$8
      RETURNING *
      `,
      [title, descript, model, color, wheelType, interior, layout, id]
    );

    return new ModelY(rows[0]);
  }

  // ---------------------------------------------
  
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM model_y WHERE id=$1 RETURNING *',
      [id]
    );

    return new ModelY(rows[0]);
  } 


};
