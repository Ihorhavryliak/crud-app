import {
  Box,
  Button, Input
} from "@mui/material";
import { useState } from "react";
import { useStoreDispatch } from "../../../redux/store";
import { createUser } from "../../../redux/UserRedux/UserRedux";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";




export const FormUserCreate = () => {
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
        bs: setBs,
      },
    };
    const stringify = JSON.stringify(user);
    const parse = JSON.parse(stringify);
    dispatch(createUser([parse]));
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
      {/* name */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Name</FormLabel>
          <Box>
            <Input
              value={name}
              onChange={(e) => onName(e.target.value)}
              placeholder="Enter name"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
        {/* Username */}
      </Box>
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Username</FormLabel>
          <Box>
            <Input
              value={username}
              onChange={(e) => onUsername(e.target.value)}
              placeholder="Enter username"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* email */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Email</FormLabel>
          <Box>
            <Input
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* phone */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Mobile phone</FormLabel>
          <Box>
            <Input
              value={phone}
              onChange={(e) => onPhone(e.target.value)}
              placeholder="Enter mobile phone"
              type="phone"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>

      {/* username */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>username</FormLabel>
          <Box>
            <Input
              value={username}
              onChange={(e) => onUsername(e.target.value)}
              placeholder="Enter username"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* site */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Site</FormLabel>
          <Box>
            <Input
              value={site}
              onChange={(e) => onSite(e.target.value)}
              placeholder="Enter site"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>

      {/* company name */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company name</FormLabel>
          <Box>
            <Input
              value={companyName}
              onChange={(e) => onCompanyName(e.target.value)}
              placeholder="Enter company name"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>

      {/* catch phrase  */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company catch phrase</FormLabel>
          <Box>
            <Input
              value={catchPhrase}
              onChange={(e) => onCatchPhrase(e.target.value)}
              placeholder="Enter catch phrase"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* company bs */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Company bs</FormLabel>
          <Box>
            <Input
              value={bs}
              onChange={(e) => onBs(e.target.value)}
              placeholder="Enter bs"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>

      {/* address Street */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Street</FormLabel>
          <Box>
            <Input
              value={street}
              onChange={(e) => onStreet(e.target.value)}
              placeholder="Enter street"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* address Suite */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Suite</FormLabel>
          <Box>
            <Input
              value={suite}
              onChange={(e) => onSuite(e.target.value)}
              placeholder="Enter suite"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* address city */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>City</FormLabel>
          <Box>
            <Input
              value={city}
              onChange={(e) => onCity(e.target.value)}
              placeholder="Enter city"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* address city */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Zip code</FormLabel>
          <Box>
            <Input
              value={zipCode}
              onChange={(e) => onZipCode(e.target.value)}
              placeholder="Enter zip code"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* geo lat */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Geo lat</FormLabel>
          <Box>
            <Input
              value={lat}
              onChange={(e) => onLat(e.target.value)}
              placeholder="Enter geo lat"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>
      {/* geo lng */}
      <Box>
        <FormControl>
          <FormLabel sx={{ m: 0 }}>Geo lng</FormLabel>
          <Box>
            <Input
              value={lng}
              onChange={(e) => onLng(e.target.value)}
              placeholder="Enter geo lng"
              required
              sx={{
                mb: 1,
                fontSize: "var(--joy-fontSize-sm)",
                width: "100%",
              }} />
          </Box>
        </FormControl>
      </Box>

      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};
