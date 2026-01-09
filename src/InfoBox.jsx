import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {

    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL =" https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card 
                    className={`weatherCard ${
                        info.humidity > 80
                        ? "rainy"
                        : info.temp > 15
                        ? "hot"
                        : "cold"
                    }`}
                sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL
                            : COLD_URL
                        }
                        title={`${info.city} weather`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <u> {info.city} {
                            info.humidity > 80 
                            ? <ThunderstormIcon /> 
                            : info.temp > 15 
                            ? <SunnyIcon />
                            : <AcUnitIcon />
                            } 
                        </u>
                        </Typography>
                        <Typography variant="body1" component="h2">
                            <i>{info.description}</i>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p><b>Temperature = {info.temp}&deg;C</b></p>
                            <p><b>Min Temp= {info.tempMin}&deg;C</b></p>
                            <p><b>Max Temp = {info.tempMax}&deg;C</b></p>
                            <p><b>Humidity = {info.humidity}</b></p>
                            <p><b>The weather can be described as <i>{info.description}</i> and 
                                feels like {info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
            </Card>
            </div>

        </div>
    );
};