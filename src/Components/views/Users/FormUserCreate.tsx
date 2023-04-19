import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useStoreDispatch } from "../../../redux/store";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { createUser } from "../../../redux/UserRedux/UserRedux";

const FormUserCreate = () => {
  const dispatch = useStoreDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const [site, setSite] = useState("");

  const [nameValidation, setNameValidationValidation] = useState("");
  const [usernameValidation, setUsernameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [streetValidation, setStreetValidation] = useState("");
  const [suiteValidation, setSuiteValidation] = useState("");
  const [cityValidation, setCityValidation] = useState("");
  const [zipCodeValidation, setZipCodeValidation] = useState("");
  const [latValidation, setLatValidation] = useState("");
  const [lngValidation, setLngValidation] = useState("");
  const [phoneValidation, setPhoneValidation] = useState("");
  const [companyNameValidation, setCompanyNameValidation] = useState("");
  const [catchPhraseValidation, setCatchPhraseValidation] = useState("");
  const [bsValidation, setBsValidation] = useState("");
  const [siteValidation, setSiteValidation] = useState("");

  const onName = (text: string) => setName(text);
  const onUsername = (text: string) => setUsername(text);
  const onEmail = (text: string) => setEmail(text);
  const onStreet = (text: string) => setStreet(text);
  const onSuite = (text: string) => setSuite(text);
  const onCity = (text: string) => setCity(text);
  const onZipCode = (text: string) => setZipCode(text);
  const onLat = (text: string) => setLat(text);
  const onLng = (text: string) => setLng(text);
  const onPhone = (text: string) => setPhone(text);
  const onCompanyName = (text: string) => setCompanyName(text);
  const onCatchPhrase = (text: string) => setCatchPhrase(text);
  const onBs = (text: string) => setBs(text);
  const onSite = (text: string) => setSite(text);

  const onCreateUser = () => {
    //validation
    if (name.length === 0) {
      return setNameValidationValidation("Field can not be empty");
    }
    if (username.length === 0) {
      return setUsernameValidation("Field can not be empty");
    }
    if (email.length === 0) {
      return setEmailValidation("Field can not be empty");
    }
    if (suite.length === 0) {
      return setSuiteValidation("Field can not be empty");
    }
    if (city.length === 0) {
      return setCityValidation("Field can not be empty");
    }
    if (zipCode.length === 0) {
      return setZipCodeValidation("Field can not be empty");
    }
    if (lat.length === 0) {
      return setLatValidation("Field can not be empty");
    }
    if (lng.length === 0) {
      return setLngValidation("Field can not be empty");
    }
    if (phone.length === 0) {
      return setPhoneValidation("Field can not be empty");
    }
    if (street.length === 0) {
      return setStreetValidation("Field can not be empty");
    }
    if (companyName.length === 0) {
      return setCompanyNameValidation("Field can not be empty");
    }
    if (catchPhrase.length === 0) {
      return setCatchPhraseValidation("Field can not be empty");
    }
    if (bs.length === 0) {
      return setBsValidation("Field can not be empty");
    }
    if (site.length === 0) {
      return setSiteValidation("Field can not be empty");
    }
    //clean validation
    setNameValidationValidation("");
    setUsernameValidation("");
    setEmailValidation("");
    setStreetValidation("");
    setSuiteValidation("");
    setCityValidation("");
    setZipCodeValidation("");
    setLatValidation("");
    setLngValidation("");
    setPhoneValidation("");
    setCompanyNameValidation("");
    setCatchPhraseValidation("");
    setBsValidation("");
    setSiteValidation("");
    const user = {
      id: Date.now(),
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode: zipCode,
        geo: {
          lat,
          lng,
        },
      },
      phone,
      website: site,
      company: {
        name: companyName,
        catchPhrase: catchPhrase,
        bs,
      },
    };
    const parse = JSON.parse(JSON.stringify(user));
    dispatch(createUser(parse));
    //clean data
    setName("");
    setUsername("");
    setEmail("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipCode("");
    setLat("");
    setLng("");
    setPhone("");
    setCompanyName("");
    setCatchPhrase("");
    setBs("");
    setSite("");
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onCreateUser();
      }}
    >
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Name</FormLabel>
          <Box>
            <Input
              value={name}
              onChange={(e) => onName(e.target.value)}
              placeholder="Enter name"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {nameValidation.length > 0 && nameValidation}
        </Typography>
      </Box>
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Username</FormLabel>
          <Box>
            <Input
              value={username}
              onChange={(e) => onUsername(e.target.value)}
              placeholder="Enter username"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {usernameValidation.length > 0 && usernameValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Email</FormLabel>
          <Box>
            <Input
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
          <Typography color="red">
            {emailValidation.length > 0 && emailValidation}
          </Typography>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Mobile phone</FormLabel>
          <Box>
            <Input
              value={phone}
              onChange={(e) => onPhone(e.target.value)}
              placeholder="Enter mobile phone"
              type="phone"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
          <Typography color="red">
            {phoneValidation.length > 0 && phoneValidation}
          </Typography>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Site</FormLabel>
          <Box>
            <Input
              value={site}
              onChange={(e) => onSite(e.target.value)}
              placeholder="Enter site"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {siteValidation.length > 0 && siteValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company name</FormLabel>
          <Box>
            <Input
              value={companyName}
              onChange={(e) => onCompanyName(e.target.value)}
              placeholder="Enter company name"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {companyNameValidation.length > 0 && companyNameValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company catch phrase</FormLabel>
          <Box>
            <Input
              value={catchPhrase}
              onChange={(e) => onCatchPhrase(e.target.value)}
              placeholder="Enter catch phrase"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {catchPhraseValidation.length > 0 && catchPhraseValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company bs</FormLabel>
          <Box>
            <Input
              value={bs}
              onChange={(e) => onBs(e.target.value)}
              placeholder="Enter bs"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {bsValidation.length > 0 && bsValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Street</FormLabel>
          <Box>
            <Input
              value={street}
              onChange={(e) => onStreet(e.target.value)}
              placeholder="Enter street"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {streetValidation.length > 0 && streetValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Suite</FormLabel>
          <Box>
            <Input
              value={suite}
              onChange={(e) => onSuite(e.target.value)}
              placeholder="Enter suite"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {suiteValidation.length > 0 && suiteValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>City</FormLabel>
          <Box>
            <Input
              value={city}
              onChange={(e) => onCity(e.target.value)}
              placeholder="Enter city"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {cityValidation.length > 0 && cityValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Zip code</FormLabel>
          <Box>
            <Input
              value={zipCode}
              onChange={(e) => onZipCode(e.target.value)}
              placeholder="Enter zip code"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {zipCodeValidation.length > 0 && zipCodeValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Geo lat</FormLabel>
          <Box>
            <Input
              value={lat}
              onChange={(e) => onLat(e.target.value)}
              placeholder="Enter geo lat"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {latValidation.length > 0 && latValidation}
        </Typography>
      </Box>

      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Geo lng</FormLabel>
          <Box>
            <Input
              value={lng}
              onChange={(e) => onLng(e.target.value)}
              placeholder="Enter geo lng"
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }}
            />
          </Box>
        </FormControl>
        <Typography color="red">
          {lngValidation.length > 0 && lngValidation}
        </Typography>
      </Box>

      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};

export default FormUserCreate;
