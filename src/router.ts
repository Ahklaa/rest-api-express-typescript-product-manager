import {Router} from 'express'

const router = Router()


router.get("/",(req,res) => {
    res.json("GET PETITION");
});

router.post("/",(req,res) => {
    res.json("PETITION POST")
});
router.put("/",(req,res) => {
    res.json("PETITION PUT")
});
router.delete("/",(req,res) => {
    res.json("PETITION DELETE")
});
router.patch("/",(req,res) => {
    res.json("PETITION PATCH")
});
export default router
