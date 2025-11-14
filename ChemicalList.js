import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function ChemicalList() {
  const [chemicals, setChemicals] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/chemicals/")
      .then((response) => setChemicals(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Chemical List
      </Typography>

      <Grid container spacing={2}>
        {chemicals.length === 0 ? (
          <Typography>No chemicals available.</Typography>
        ) : (
          chemicals.map((chem) => (
            <Grid item xs={12} sm={6} md={4} key={chem.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{chem.name}</Typography>
                  <Typography>Formula: {chem.formula}</Typography>
                  <Typography>Molecular Weight: {chem.molecular_weight}</Typography>
                  <Typography>Description: {chem.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default ChemicalList;
